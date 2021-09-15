import React, { useMemo } from "react";
import { Schema, WorldTimeline, WorldTimelineSection } from "../../utils/types";

import Centered from "../../components/wrappers/Centered";
import Divider from "../../components/layouts/Divider";
import Head from "next/head";
import Newsletter from "../../components/layouts/Newsletter";
import ReactMarkdown from "react-markdown";
import Section from "../../components/wrappers/Section";
import Timeline from "../../components/layouts/Timeline";
import Wrapper from "../../components/layouts/wrapper";
import { slugify } from "../../utils";
import { useRouter } from "next/router";

type ItemType = "section" | "timeline";

type Item<T> = {
  type: ItemType;
  item: T;
};

export default function Worlds(props: Schema) {
  const router = useRouter();

  const world = useMemo(() => {
    const worldSlug = router.query.world;
    return props.worlds.find((_world) => slugify(_world.title) === worldSlug);
  }, [router.query]);

  const items: Array<Item<WorldTimelineSection> | Item<WorldTimeline>> =
    useMemo(() => {
      if (!world) return [];
      const items = [
        ...world.sections.map((_section) => ({
          item: _section,
          type: "section" as ItemType,
        })),
        ...world.timelines.map((_timeline) => ({
          item: _timeline,
          type: "timeline" as ItemType,
        })),
      ];
      return items.sort((a, b) => a.item.order - b.item.order);
    }, [world]);

  const page = useMemo(
    () => props.pages.find((_page) => _page.slug === "world"),
    [props.pages]
  );

  if (!world) return null;

  return (
    <Wrapper
      headerProps={{
        series: props.series,
        worlds: props.worlds,
      }}
      footerProps={{
        socials: props.socials,
      }}
    >
      <Head>
        <title>
          {world.title} - {page?.Title || ""} - Aaron Hodges
        </title>
        <meta
          name="description"
          property="og:description"
          content={page?.Description || ""}
        />
        <meta name="keywords" content={page?.Keywords || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Section>
          <h1 className="mb-8">{world.title}</h1>
          <h3 className="md:w-3/5">{world.subtitle}</h3>
        </Section>
        {items.map((_item, i) => {
          if (_item.type === "section") {
            const item = _item as Item<WorldTimelineSection>;
            return (
              <Section key={i}>
                <Divider
                  left={
                    i % 2 === 0 ? (
                      <div className="h-full flex flex-col">
                        <h2 className="mb-8">{item.item.emphasis}</h2>
                        <ReactMarkdown>{item.item.content}</ReactMarkdown>
                      </div>
                    ) : (
                      item.item.images.map((_image) => (
                        <img
                          key={_image.id}
                          src={_image.url}
                          className="h-auto w-auto mb-8"
                        />
                      ))
                    )
                  }
                  right={
                    i % 2 !== 0 ? (
                      <div className="h-full flex flex-col">
                        <h2 className="mb-8">{item.item.emphasis}</h2>
                        <ReactMarkdown>{item.item.content}</ReactMarkdown>
                      </div>
                    ) : (
                      item.item.images.map((_image) => (
                        <img
                          key={_image.id}
                          src={_image.url}
                          className="h-auto w-auto mb-8"
                        />
                      ))
                    )
                  }
                />
              </Section>
            );
          }
          if (_item.type === "timeline") {
            const item = _item as Item<WorldTimeline>;
            return (
              <Section key={i}>
                <Timeline
                  entries={item.item.entries.map((_entry) => {
                    let count = 0;
                    let content = _entry.contents;

                    const regexp = new RegExp("{{image}}", "gm");
                    let match;

                    while ((match = regexp.exec(content)) !== null) {
                      const image = `<div style="height: 250px; margin-bottom: 1rem; background-image: url(${_entry.images[count].url}); background-position: center; background-size: cover;" />`;
                      content =
                        content.slice(0, match.index) +
                        image +
                        content.slice(regexp.lastIndex, content.length - 1);
                      count++;
                    }

                    return {
                      title: _entry.title,
                      content: content,
                    };
                  })}
                />
              </Section>
            );
          }
        })}
        <Section>
          <Centered>
            <Newsletter newsletter={props.newsletter} />
          </Centered>
        </Section>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  const paths = data.worlds.map((_world) => ({
    params: { world: slugify(_world.title) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch("https://admin.m-hodges.com/aahodges");
  const data: Schema = await res.json();
  return { props: data };
}

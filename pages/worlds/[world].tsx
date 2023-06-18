import React, { useMemo } from "react";
import { WorldSection, WorldTimeline } from "../../utils/types";
import schema, { Schema } from "../../utils/schema";

import Centered from "../../components/wrappers/Centered";
import Divider from "../../components/layouts/Divider";
import Image from "../../components/elements/Image";
import Meta from "../../components/elements/Meta";
import Newsletter from "../../components/layouts/Newsletter";
import Section from "../../components/wrappers/Section";
import Timeline from "../../components/layouts/Timeline";
import Wrapper from "../../components/layouts/wrapper";
import { assetUrl } from "../../utils/constants";
import parser from "html-react-parser";
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

  const items: Array<Item<WorldSection> | Item<WorldTimeline>> = useMemo(() => {
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
      <Meta
        title={world.title}
        pageTitle={page?.title || ""}
        description={page?.description || ""}
        keywords={page?.keywords || ""}
      />
      <div>
        <Section>
          <h1 className="mb-8">{world.title}</h1>
          <h3 className="md:w-3/5">{world.subtitle}</h3>
        </Section>
        {items.map((_item, i) => {
          if (_item.type === "section") {
            const item = _item as Item<WorldSection>;
            return (
              <Section key={i}>
                <Divider
                  left={
                    i % 2 === 0 ? (
                      <div className="flex flex-col h-full">
                        <h2 className="mb-8">{item.item.emphasis}</h2>
                        {parser(item.item.content || "")}
                      </div>
                    ) : (
                      item.item.images.map((_image) => (
                        <Image
                          key={_image.id}
                          imageId={_image.directus_files_id}
                          className="w-auto h-auto mb-8"
                        />
                      ))
                    )
                  }
                  right={
                    i % 2 !== 0 ? (
                      <div className="flex flex-col h-full">
                        <h2 className="mb-8">{item.item.emphasis}</h2>
                        {parser(item.item.content || "")}
                      </div>
                    ) : (
                      item.item.images.map((_image) => (
                        <Image
                          key={_image.id}
                          imageId={_image.directus_files_id}
                          className="w-auto h-auto mb-8"
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
                  entries={
                    item.item.entries?.map((_entry) => {
                      let count = 0;
                      let content = _entry.content;

                      const regexp = new RegExp("{{image}}", "gm");
                      let match;

                      while ((match = regexp.exec(content)) !== null) {
                        const image = `<div style="height: 250px; margin-bottom: 1rem; background-image: url(${assetUrl}${_entry.images[count].directus_files_id}); background-position: center; background-size: cover;" />`;
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
                    }) || []
                  }
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
  const data = await schema();
  const paths = data.worlds.map((_world) => ({
    params: { world: slugify(_world.title) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const data = await schema();
  return { props: data };
}

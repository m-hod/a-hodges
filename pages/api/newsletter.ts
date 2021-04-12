// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Mailerlite-ApiKey": process.env.NEXT_PUBLIC_MAILERLITE_API_KEY,
  },
});

const cors = Cors({
  methods: ["POST"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

module.exports = async (req, res) => {
  await runMiddleware(req, res, cors);
  console.log(req.body);
  console.log(req.body.email);
  const body = JSON.parse(req.body);
  console.log(body);
  await instance
    .post(`https://api.mailerlite.com/api/v2/groups/8538412/subscribers`, {
      email: body.email,
    })
    .then(({ data }) => {
      console.log("success", data);
      res.status(200).json({ data });
    })
    .catch(({ err }) => {
      console.warn("error", err);
      res.status(400).json({ err });
    });
};

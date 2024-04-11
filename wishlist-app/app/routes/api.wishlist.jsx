import { json } from "@remix-run/node";

export async function loader() {
  return json({
    ok: true,
    message: "Hello, world!",
  });
}

export async function action({ request }) {
  const method = request.method;
  switch (method) {
    case "POST":
      return json({
        ok: true,
        message: "Hello, world! POST",
      });

    case "PATCH":
      return json({
        ok: true,
        message: "Hello, world! PATCH",
      });
    default:
      return json(
        {
          ok: false,
          message: "Method not allowed",
        },
        {
          status: 405,
        },
      );
  }
}

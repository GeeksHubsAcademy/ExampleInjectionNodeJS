import  * as request from 'supertest'
import * as Express from 'express';

const app = Express();

describe("GET /hello", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/hello");
    expect(result.text).toEqual("Hello World");
    expect(result.status).toEqual(200);
  });
});

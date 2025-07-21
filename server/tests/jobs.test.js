import request from "supertest";
import app from "../server.js"; // Make sure your express app is exported here
import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Jobs API", () => {
  it("should get all jobs", async () => {
    const res = await request(app).get("/api/jobs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should not create job without auth", async () => {
    const res = await request(app).post("/api/jobs").send({
      title: "New Job",
      company: "Test Corp",
    });
    expect(res.statusCode).toBe(401); // assuming route is protected
  });
});

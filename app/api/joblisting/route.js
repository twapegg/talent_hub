import jobListing from "@/models/joblisting";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const jobs = await jobListing.find({});

    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all jobs", { status: 500 });
  }
};

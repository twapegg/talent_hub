import jobListing from "@/models/joblisting";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { title, company, location, salary, description, industry } =
    await request.json();

  try {
    await connectToDB();
    const newJob = new jobListing({
      title: title,
      company: company,
      location: location,
      salary: salary,
      description: description,
      industry: industry,
    });

    await newJob.save();
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new job", { status: 500 });
  }
};

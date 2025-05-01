"use server";
export const getAllProjects = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.PORTFOLIO_PUBLIC_BASE_API}/projects/?limit=${limit}&page=${page}`
      //   {
      //     headers: {
      //       Authorization: (await cookies()).get("accessToken")!.value,
      //     },
      //     next: {
      //       tags: ["Listing"],
      //     },
      //   }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single project
export const getSingleProject = async (projectId: string) => {
  try {
    const res = await fetch(
      `${process.env.PORTFOLIO_PUBLIC_BASE_API}/projects/${projectId}`
      // {
      //   next: {
      //     tags: ["Listing"],
      //   },
      // }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

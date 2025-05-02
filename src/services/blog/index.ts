"use server";
export const getAllBlogs = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.PORTFOLIO_PUBLIC_BASE_API}/blogs?limit=${limit}&page=${page}`
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

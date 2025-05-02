"use server";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createMessage = async (
  data: FieldValues,
  limit?: number,
  page?: number
) => {
  try {
    const res = await fetch(
      `${process.env.PORTFOLIO_PUBLIC_BASE_API}/messages?limit=${limit}&page=${page}`,
      {
        method: "POST",
        headers: {
          //   Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    revalidateTag("Message");
    console.log("res server", res);

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

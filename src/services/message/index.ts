"use server";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createMessage = async (data: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.BASA_FINDER_PUBLIC_BASE_API}/landlords/listings`,
      {
        method: "POST",
        // headers: {
        //   Authorization: (await cookies()).get("accessToken")!.value,
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(data),
      }
    );

    revalidateTag("Message");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

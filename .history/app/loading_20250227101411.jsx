/* eslint-disable prettier/prettier */
"use cli"
import { Spinner } from "@heroui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}

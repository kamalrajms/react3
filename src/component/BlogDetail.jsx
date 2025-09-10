import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams;
  return <div>Blog Detailes</div>;
}

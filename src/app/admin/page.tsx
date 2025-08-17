import React from "react";
import { users } from "../../lib/mockData";

export default function AdminPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Admin Dashboard (mock)</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Users</h3>
          <div className="text-3xl mt-2">{users.length}</div>
        </div>
      </div>
    </main>
  );
}

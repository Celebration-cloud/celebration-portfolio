/* eslint-disable prettier/prettier */
// components/References.jsx
"use client";
export default function References({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading7"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          References
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((ref, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {ref.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                Contact
              </p>
              <p className="text-gray-700 dark:text-gray-300">{ref.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

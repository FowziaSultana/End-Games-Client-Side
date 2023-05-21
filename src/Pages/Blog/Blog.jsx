import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("BLOGS");
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="grid max-w-xl mx-auto mt-8">
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                An access token is a credential that grants a client permission
                to access protected resources. A refresh token is used to obtain
                a new access token without requiring the user to reauthenticate.
                It's recommended to store tokens securely on the client-side,
                such as in a secure cookie or browser storage with appropriate
                safeguards to prevent unauthorized access.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Compare SQL and NoSQL databases</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SQL databases are structured, with predefined schemas and
                support for complex queries. NoSQL databases are flexible,
                schema-less, and scale horizontally. SQL databases are ideal for
                structured data and complex queries, while NoSQL databases are
                suitable for unstructured and rapidly changing data, offering
                high scalability and performance.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>What is express js? What is Nest JS</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Express.js is a minimalistic and flexible web application
                framework for Node.js. It provides a simple yet powerful set of
                features for building web applications and APIs. With a
                lightweight and unopinionated approach, Express.js allows
                developers to quickly create server-side applications. Nest.js
                is a progressive, TypeScript-based web application framework
                that builds on top of Express.js. It focuses on developer
                productivity and uses a modular architecture, dependency
                injection, and decorators to create highly scalable and
                maintainable applications. Nest.js provides a solid foundation
                for building server-side applications in Node.js.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is MongoDB aggregate and how does it work</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                MongoDB aggregate is a powerful feature that allows you to
                perform advanced data analysis and transformation operations on
                MongoDB collections. It uses a pipeline of stages to process
                documents and generate aggregated results based on specified
                criteria.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

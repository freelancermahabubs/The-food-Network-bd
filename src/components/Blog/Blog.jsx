import React, { useEffect, useState } from "react";
import PropTypes from "../../assets/proptypes.png";
import Pdf from "react-to-pdf";
import SecondNavBar from "../Sheard/SecondNavBar/SecondNavBar";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Blog = () => {
  const ref = React.createRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <SecondNavBar />
      <div className="my-container">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={toPdf}
            >
              Download PDF
            </button>
          )}
        </Pdf>

        <div ref={ref} className="my-container">
          <h1 className="text-center lg:text-6xl text-xl font-bold bg-green-500 lg:w-[64%] mx-auto rounded text-white p-2">
            This is Blog Section
          </h1>
          <h2 className="lg:text-3xl mt-2 text-2xl font-bold">
            Differences between uncontrolled and controlled components?
          </h2>
          <p className="text-xl">
            In React, components can be either controlled or uncontrolled. The
            main difference between the two is how they manage and update data.
            An uncontrolled component is a component that manages its own state
            internally. This means that the component has its own way of
            managing and updating its data, which is independent of any external
            state. The state of an uncontrolled component is typically managed
            through DOM manipulation and can be accessed and updated using the
            ref attribute. Uncontrolled components are often used for simple
            form inputs like text fields, checkboxes, and radio buttons. On the
            other hand, a controlled component is a component that receives its
            data and state from a parent component. The parent component is
            responsible for managing and updating the state of the controlled
            component. The state of a controlled component is typically managed
            through state variables and is passed down to the component via
            props. Controlled components are often used for more complex form
            inputs like select boxes, where the selected value needs to be
            managed by the parent component. The choice of whether to use a
            controlled or uncontrolled component depends on the specific use
            case and requirements of the component. Uncontrolled components are
            generally easier to use and require less code, but they provide less
            control and flexibility over the data. Controlled components, on the
            other hand, provide more control and flexibility over the data, but
            require more code and can be more complex to implement.
          </p>
          <h2 className="lg:text-3xl mt-2 text-2xl font-bold">
            How to validate React props using PropTypes?
          </h2>
          <p className="text-xl">
            here's an example of how to use PropTypes to validate the props
            passed to an Article component in React:
          </p>
          <img className="mt-2 mx-auto rounded" src={PropTypes} alt="" />
          <p className="text-xl">
            In this example, we have defined a set of prop types for the
            MyComponent component. The PropTypes object provides a set of
            methods that can be used to validate the props. The name prop is
            expected to be a string and is marked as required using the
            isRequired method. The age prop is expected to be a number, but it
            is not required. The email prop is expected to be a string, but it
            is also not required. The isStudent prop is expected to be a boolean
            and is marked as required. The hobbies prop is expected to be an
            array of strings. The address prop is expected to be an object with
            four properties: street, city, state, and zipCode, each of which is
            expected to be a string. If any of the props do not match the
            expected type or are missing, a warning message will be logged to
            the console. By using PropTypes to validate props, you can catch
            potential bugs early and ensure that your components behave
            correctly.
          </p>
          <h2 className="lg:text-3xl  text-2xl font-bold mt-4">
            Difference between nodejs and express js.
          </h2>
          <p className="text-xl">
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser. It is built on top of the V8 JavaScript
            engine and provides a set of built-in modules for performing various
            tasks, such as file I/O, network communication, and more.
          </p>
          <p className="text-xl">
            Express.js, on the other hand, is a web framework for Node.js. It
            provides a set of features and tools for building web applications
            and APIs using Node.js. Express.js provides a robust set of
            middleware functions, which can be used to handle various HTTP
            requests and responses, as well as to perform authentication, data
            validation, and more.
          </p>
          <h3 className="text-2xl font-semibold mt-2">
            Here are some key differences between Node.js and Express.js:
          </h3>
          <p className="text-xl">
            1. Node.js is a runtime environment for executing JavaScript code,
            while Express.js is a web framework built on top of Node.js.
            <br />
            2. Node.js provides built-in modules for performing various tasks,
            such as file I/O, network communication, and more, while Express.js
            provides a set of features and tools for building web applications
            and APIs.
            <br />
            3. Node.js is low-level and requires more manual configuration,
            while Express.js is higher-level and provides more abstractions and
            convenience.
            <br />
            4. Node.js can be used for building various types of applications,
            including desktop applications, command-line tools, and more, while
            Express.js is mainly focused on building web applications and APIs.
          </p>
          <h2 className="lg:text-3xl  text-2xl font-bold mt-4">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="text-xl">
            In React, a custom hook is a JavaScript function that allows you to
            reuse logic across multiple components. Custom hooks can be created
            by extracting common functionality from components into a reusable
            hook function. Custom hooks follow a naming convention that begins
            with the word "use". Custom hooks allow you to extract and reuse
            stateful logic from a component, such as fetching data from an API,
            handling browser events, or managing animations. By creating custom
            hooks, you can keep your components clean and focused on rendering
            UI, while encapsulating complex logic in reusable functions.
          </p>
          <br />
          <h3 className="text-xl font-semibold">
            Here are some reasons why you might want to create a custom hook:
          </h3>
          <br />
          <p className="text-xl">
            1. Reusability: Custom hooks allow you to reuse stateful logic
            across multiple components, making your code more modular and easier
            to maintain.
            <br />
            2. Abstraction: Custom hooks allow you to abstract away complex
            logic, making your components cleaner and more focused on rendering
            UI.
            <br />
            3. Encapsulation: Custom hooks allow you to encapsulate stateful
            logic, making it easier to test and debug.
            <br />
            4. Consistency: Custom hooks provide a consistent interface for
            working with stateful logic, making it easier for developers to
            reason about and use the codebase.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;

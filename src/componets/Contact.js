const Contact = () => {
  return (
    <div>
      <h1>AboutUs Page</h1>
      <input
        className="border border-black=50 m-2 p-2"
        type="text"
        placeholder="name"
      />
      <input
        className="border border-black=50 m-2 p-2"
        type="text"
        placeholder="message"
      />
      <button className="border border-black=50 m-2 p-2 bg-gray-300">
        Submit
      </button>
    </div>
  );
};

export default Contact;

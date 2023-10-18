const Form = ({ children, ...rest }) => {
  return (
    <div>
      <form action="#" {...rest}>
        {children}
      </form>
    </div>
  );
};

export default Form;

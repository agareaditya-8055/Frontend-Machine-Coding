type Props = {
  message: string;
};

const Message = ({ message }: Props) => (
  <p className={`text-xl font-semibold ${message === "Correct!" ? "text-green-600" : "text-red-500"}`}>
    {message}
  </p>
);

export default Message;

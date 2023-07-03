interface BorderTextProps {
  text: string;
}

const BorderText = ({ text }: BorderTextProps) => {
  return (
    <p className="inline text-black whitespace-nowrap decoration-none border solid border-black2 rounded-[30em] px-[0.2em] pb-[1px] transition-all ease-in-out duration-[200ms] hover:bg-black hover:text-[#fff]">
      {text}
    </p>
  );
};

export default BorderText;

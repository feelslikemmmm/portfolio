interface LinkProps {
  text: string;
  url: string;
}

const Link = ({ text, url }: LinkProps) => {
  return (
    <a
      className="py-[5px] px-[20px] bg-[#212121] border solid border-[#212121] rounded-[300px] text-[#fff] transition-all ease-in-out duration-[200ms] hover:bg-[#472A18]"
      href={url}
      target="blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Link;

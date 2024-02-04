interface Props {
  buttonText: 'string';
  maxChar?: number;
  onClick: () => void;
}
function ExpandableText({ buttonText, maxChar = 10, onClick }: Props) {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        nisi accumsan, tempor augue a, pellentesque tellus. Mauris vel lacus
        magna. Integer molestie facilisis mauris, vitae consequat dui accumsan
        sit amet. Phasellus dapibus malesuada purus, ac laoreet nunc condimentum
        et. Aliquam suscipit efficitur augue, eget porta neque sodales ac. In
        hac habitasse platea dictumst. Nam in fringilla tellus.
      </p>
      <button type='button' className='btn btn-primaty' onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}

export default ExpandableText;

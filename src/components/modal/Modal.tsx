interface ModalOutsideProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalOutside = ({ children, onClose }: ModalOutsideProps) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
};
export default ModalOutside;

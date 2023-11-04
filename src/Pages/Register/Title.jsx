const Title = ({children}) => {
    return (
      <div className="border-l-[12px] mt-40 border-rose-600">
        <h3 className="text-7xl font-bold text-orange-600 w-full px-6">
          {children}
        </h3>
      </div>
    );
};

export default Title;
export const EmptyImage = ({ children }) => (
    <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10">      
        <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/empty.jpg` } />
        {children}        
    </div>
);


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justfy-between items-center" >
            <div className="bg-gray flex justify-center items-center w-1/2 h-screen">
                <h1 className="font-daysOne text-7xl text-center px-20">A simple solution for big events</h1>
            </div>
            <div className="w-1/2">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justfy-between items-center" >
            <div className="bg-gray hidden lg:flex justify-center items-center w-1/2 h-screen">
                <h1 className="font-daysOne text-7xl text-center px-20">A simple solution for big events</h1>
            </div>
            <div className="w-full lg:w-1/2 flex h-screen justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
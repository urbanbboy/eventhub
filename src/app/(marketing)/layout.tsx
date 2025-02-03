import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;
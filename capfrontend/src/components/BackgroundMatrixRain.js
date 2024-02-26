import MatrixRain from "./MatrixRain";

const BackgroundMatrixRain = ({ children }) => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <MatrixRain />
            {children}
        </div>
    );
};

export default BackgroundMatrixRain;
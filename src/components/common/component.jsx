import { useResponsiveJSX } from "../../hooks/useResponsiveJSX";

const Components = () => {
    const breakpoint = useResponsiveJSX([600, 900, 1200]);

    return (
        <>
            {breakpoint === 0 && <div>Mobile View</div>}
            {breakpoint === 1 && <div>Tablet View</div>}
            {breakpoint === 2 && <div>Desktop View</div>}
            {breakpoint === 3 && <div>Large Desktop</div>}
        </>
    );
};

export default Components;

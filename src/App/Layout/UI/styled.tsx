import { Container, ContainerProps, styled } from "@mui/material";

export const LayoutContainer = styled((props: ContainerProps) => <Container component={"section"} {...props} />)(
    ({}) => ({
        width: "100%",
        height: "fit-content",
        minHeight: "662px",
        padding: "36px 64px 80px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    }),
);

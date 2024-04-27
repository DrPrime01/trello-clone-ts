import CardContainer from "./CardContainer";

interface CardProps {
    text: string
}
export default function Card({ text }: CardProps) {
    return <CardContainer>{text}</CardContainer>
}
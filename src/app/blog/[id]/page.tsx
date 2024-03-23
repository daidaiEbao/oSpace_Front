import Detail from "./Detail";

const DetailPage = ({ params }: { params: { id: string } }) => {

    return (
        <Detail id={params.id} />
    );
}

export default DetailPage;
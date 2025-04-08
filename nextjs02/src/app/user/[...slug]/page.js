
const page = async ({ params }) => {
    const { slug } = await params
    return <div>{slug.map((s, index) => (<p key={index}>{s}</p>))}</div>;
};

export default page;

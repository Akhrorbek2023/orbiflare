

const AboutVideo = () => {
    return (
        <div className="about-header">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center items-center h-[80vh]">
                <video width={700} height={380} autoPlay muted loop controls>
                    <source src="../../public/test.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    )
}

export default AboutVideo
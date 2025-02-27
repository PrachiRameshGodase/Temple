import React from "react";
import "./SocialServices.scss";

const services = [
    {
        id: 1,
        title: "Feeding the poor and the needy",
        description:
            "Sri Shirdi Sai Anandamaiyee Trust does Annadana (Sponsors lunch) to about 50 Autistic students of a school every day. Fresh nutritious food is transported from the farm to school every day.",
        image: "https://s3-alpha-sig.figma.com/img/df15/d512/9517481032e1f29b532fad35d7b1416d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RbGxvgL604kESY0awiG~DGT~pnT8oEnFnyOxwFKFWcKRFD2qkpTHUU3Y83tUxV6eZn0y38nWLp7J9m-E9XOEwCFGattQx~VYfUxfTU~SrbnNJizUJhQV7bW-9ay56uLhVUK-1VJUeoGHd7ucEcofld9Q103if~wpyNsQXtFc~WkH-Uv-~7kXZRPvnW1takebgq4QOmi6kzqr7Pbk5eH5tf4PC~OYsIMWLXilbfRNxM4-gvDJ~1EsfIT357MyjstWpFcIDIM-zH1L9zoFo0e~fMUjqKvR6vXfcWrd3bpnTtXtgbA~W48hXMCuLKLO9hJ1IVXU6OAvF9cxRfi~BotM-Q__",
    },
    {
        id: 2,
        title: "Empowering self help among women",
        description:
            "The Trust also engages in conducting training classes among the women from the near- by village. The aim is to provide self employment among women that get help them to earn bread for themselves rather than depend on anyone.",
        image: "https://s3-alpha-sig.figma.com/img/0916/1e8b/e45f81c000473fa4bf1ac1e5a15dfa26?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WV3j0GekLo3MUQkp~84x-Y0f8Rasfl-BEwuUIbfqLc1~noD7VapvmE-3lUIjTBus61ksDPrJMxh-EG5DXauk-XB4j8qFYzTUg9OuPoOMxP2jaWi0x4DJ3lohCPmwGcv6axAwACRaPOMcgVFq2r1XGpj9fZLNH~KhAwHyuSLqnWugFy3eLwTOYYQY3vr0GB-ngnUsWfjs0go0FhlrcxB4eJhlfP-AlGvng7Xf9ukRoVYVwhQbaLnHiLMdtoOR59~EAdWIF0jgE2N~bYLUz7DlrHFyxa5M49F0dkL6o-azgH533tH5seTn3caD6LnCD4lNY2PRG5efH0IVoiAo7kVbjQ__",
    },
    {
        id: 3,
        title: "Computer classes for kids & women",
        description:
            "Kids from the near-by villages who have never been exposed to computer are being taught basic computer courses. As technology is so vital in today’s life, the trust helps in providing kids with basic introduction to computers.",
        image: "https://s3-alpha-sig.figma.com/img/d40c/d6ff/82823f14f28b14e3993adf61427f0f29?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XbTlstVyhL398dG-sjBVntFfLHE2vfbZHBkBysbwfbig4-S2BObhkNM7xuMm5kEEOXM5n-iBE9U1S6RrjOQdxaXZx256CldToms3Vjtzdpwk6mOktuwa9UVarsp9ZWUbCvQiu4oTo2AoDVEe-~kIwkGhdTdDoH8Q3mKzlcLe7Dqq9up4o0MWfZKepH9f7IWXXuvy-qCZ427mMsT8RncYrTnEBMDkYbYheW6xafZzrIqJy8hN-C28gacRP4DIwgFfJw9583hzYYFSkhlWHpBhEYbsMiuzTYhxkJuOW~XH9DU~aHbAPoC1VQbfO2mmRFZ~g9~Co0tvjWvCsKfPWiNQwg__",
    },
    {
        id: 4,
        title: "Assistance in Education & Healthy living",
        description:
            "As one rightly says Anna dhana (Donating food) is great but Vidya dhana (Sharing knowledge) is the greatest among all dhanas. Capt. V.V. Mahesh takes personal attention in conducting tuitions for kids who are weak in studies.",
        image: "https://s3-alpha-sig.figma.com/img/af24/c126/56dd2d75e0f27aa960d1decdc4c18c35?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dI4vXuisRmpmShO113HR3swXRdFqIO28PfiOfk29Ib2TfyGY96PrlwL4n4l8CZ5EyNaRjmdI9QV0ib9Xi4t1RY8-FxWqop3bNS-jEh2NxHlQfjkVIOAphSTCbllnfyveW611w9ncBP~qUiSh53TFdQHmLJ33LXDF7L4ClwMfH2sQsOh3b1KsvqclKfl37705c9X1Hq71Qzl-gXeeDrjNnPbZERWFvx2~EgH~1DJjv-smqBo1tiyKtAwFNaPa3r9y1DAoPyISOZMyVRBYv2mD9o7IK-xWdiUJhCkZklKJHHeLkTNisE~GJfpkBRM7UkqWDo5zUEi9GjGWqexKzkVYpg__",
    },
];

const SocialServices = () => {
    return (
        <section className="social-services">
            <h2 className="title">Social Services</h2>
            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <button className="see-all">See All services</button>
        </section>
    );
};

export default SocialServices;

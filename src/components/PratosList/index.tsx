import React, { useState } from "react";
import { PratosCard, type PratosCardProps } from "../PratosCard";
import { Grid, List } from "./styles.ts";
import Modal from "../Modal";

const pratosItalianos = [
    {
        id: 1,
        image: '/image1.png',
        title: 'Lasanha à Bolonhesa',
        description: 'Camadas de massa fresca intercaladas com molho de carne moída, molho branco e queijo parmesão, gratinado ao forno.'
    },
    {
        id: 2,
        image: '/image1.png',
        title: 'Pizza Margherita',
        description: 'A pizza clássica italiana, com molho de tomate, mussarela fresca, manjericão e um fio de azeite.'
    },
    {
        id: 3,
        image: '/image1.png',
        title: 'Risoto de Funghi',
        description: 'Arroz arbóreo cremoso, cozido com caldo de legumes e cogumelos porcini secos, finalizado com queijo parmesão.'
    },
    {
        id: 4,
        image: '/image1.png',
        title: 'Espaguete à Carbonara',
        description: 'Um prato romano autêntico, com ovos, queijo pecorino romano, guanciale (ou bacon) e pimenta-do-reino moída na hora.'
    },
    {
        id: 5,
        image: '/image1.png',
        title: 'Fettuccine Alfredo',
        description: 'Massa fettuccine servida em um molho cremoso e rico, feito com manteiga e queijo parmesão.'
    },
    {
        id: 6,
        image: '/image1.png',
        title: 'Ossobuco alla Milanese',
        description: 'Ensopado de vitela com osso cozido lentamente em vinho branco, legumes e caldo de carne, servido com risoto à milanesa.'
    }
]

const pratosJaponeses = [
    {
        id: 1,
        image: '/image2.png',
        title: 'Sushi (Nigiri)',
        description: 'Fatias finas de peixe cru de alta qualidade (como salmão ou atum) servidas sobre bolinhos de arroz de sushi.'
    },
    {
        id: 2,
        image: '/image2.png',
        title: 'Lámen (Shoyu Ramen)',
        description: 'Macarrão servido em um caldo saboroso à base de shoyu, com fatias de porco, ovo cozido, brotos de bambu e cebolinha.'
    },
    {
        id: 3,
        image: '/image2.png',
        title: 'Tempurá',
        description: 'Camarões e vegetais mergulhados em uma massa leve e fritos até ficarem dourados e crocantes.'
    },
    {
        id: 4,
        image: '/image2.png',
        title: 'Sashimi',
        description: 'Fatias frescas e delicadas de peixe cru de alta qualidade, servidas sem arroz, para apreciar o sabor puro do peixe.'
    },
    {
        id: 5,
        image: '/image2.png',
        title: 'Udon',
        description: 'Macarrão japonês grosso e mastigável, servido em um caldo quente com várias opções de acompanhamentos.'
    },
    {
        id: 6,
        image: '/image2.png',
        title: 'Karaage',
        description: 'Pedaços de frango marinados em molho de soja e gengibre, e fritos até ficarem crocantes por fora e suculentos por dentro.'
    }
]

export type Props = {
    isJaponesa: boolean
}

export const PratosList: React.FC<Props> = ({ isJaponesa }) => {
    const [selectedPrato, setSelectedPrato] = useState<PratosCardProps | null>(null);

    const handleOpenModal = (prato: PratosCardProps) => {
        setSelectedPrato(prato);
    };

    const handleCloseModal = () => {
        setSelectedPrato(null);
    };

    const pratos = isJaponesa ? pratosJaponeses : pratosItalianos;

    return (
        <>
            <div className="container">
                <List>
                    <Grid>
                        {pratos.map((prato) => (
                            <PratosCard
                                key={prato.id}
                                {...prato} // Passando todas as props de uma vez
                                onClick={() => handleOpenModal(prato)}
                            />
                        ))}
                    </Grid>
                </List>
            </div>
            {selectedPrato && (
                <Modal prato={selectedPrato} onClose={handleCloseModal} />
            )}
        </>
    );
};
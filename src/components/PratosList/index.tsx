import React, { useState } from "react";
import { PratosCard, type PratosCardProps } from "../PratosCard";
import { Grid, List } from "./styles.ts";
import Modal from "../Modal";
import type {Prato} from "../../types/types.ts";

export type Props = {
    pratos: Prato[]
}

export const PratosList: React.FC<Props> = ({ pratos }) => {
    const [selectedPrato, setSelectedPrato] = useState<Prato | null>(null);

    const handleOpenModal = (prato: Prato) => {
        setSelectedPrato(prato);
    };

    const handleCloseModal = () => {
        setSelectedPrato(null);
    };

    return (
        <>
            <div className="container">
                <List>
                    <Grid>
                        {pratos.map((prato) => (
                            <PratosCard
                                key={prato.id}
                                prato={prato}
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
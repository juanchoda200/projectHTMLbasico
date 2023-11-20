// Productos
const products = [
    { id: 0, name: "TUBOS STANDAR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBOS ROTH # 47", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBOS PARA SOLDAR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 46", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 37", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 36", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 27", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TORRETA SIN TORQUE MORELLI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 17", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TUBO DE ORTODONCIA ROTH 16", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "TONGUE TAMERS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "SEPARADOR DE ORTODONCIA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO DE PAPEL CREPADO PARA ESTERILIZ", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO DE PAPEL CREPADO PARA ESTE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO BOLSA ESTERILIZACION 50", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE NITINOL 0.12", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE NITI 0.16", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE NITI 0.14", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE AUSTRALIANO 0.18 A.J WIL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE AUSTRALIANO 0.16 A.J WIL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE AUSTRALIANO 0.14 A.J WIL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ROLLO ALAMBRE AUSTRALIANO 0.12 A.J WIL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESORTE CERRADO NITTI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESORTE ABIERTO NITTI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESORTE ABIERTO ACERO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA LLIS DA3 JERINGA X 4 GR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA LLIS DA2 JERINGA X 4 GR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA LLIS DA1 JERINGA X 4 GR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA LIQUIDA MASTERDENT 60G", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA HIDRATANTE COMPOSITE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA HERCULITE PRECIS LTI JERINGA 4GR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA HELIOSIT ORTHODONTIC REFILL X 3", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA FORMA WE JERINGA X 4 G", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "RESINA FORMA OPAQUER X4G", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "REPARACIONES AUTOLIGADO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PROTECTOR DE TEJIDO GRUESO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "POSICIONADOR DE BRACKETS MORELLYM", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PORTA TUBOS ORTODONCIA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PORTA PINCEL 3M", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PORTA CADENETA EN ACRILICO MEDIANA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PORTA BRACKETS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PORTA AGUJAS MAYO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINZA TRES PICOS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINZA PICOS PLANOS MAGNUM", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINZA DOS PICOS (139)", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINZA DE TORQUE MACHO P5", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINZA 110", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PINES EN TITANEO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "PIN QUIRURGICO PAQX10 LOT.DR2022C", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "MASCARA FACIAL DE PETIT", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "LIGADURA 0.10 X 30 GR MORELLI28", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "LAMINAS DURAS 04", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "KOBAYASHI X 100GR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "KIT ESPATULAS MARTHE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "KIT DE 3 ELEVADORES PARA RESTOS R", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ENHEBRADORES X 24 PROQUIDEN", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ENHEBRADOR GUM SUNSTAR X 25", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ENEBRADOR TUBO COLORES SURT", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "EMPACADOR DE HILOS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #9 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #8 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #7 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #5 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #4 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #32 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #31 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #3 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #29 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #27 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #26 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #23 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #22 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #21 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #20 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #2 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #19 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #18 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #17 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #16 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #15 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #13 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTIES #11 DALTON", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTICOS 3/16 L DB", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ELASTICOS 3/16 H DB", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "EDUCADORES LINGUALES X UNID", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "DISCO DIAMANTE 0.20 MM - 0.25 M", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "DENTIMETRO METALICO NACIONAL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CUÑAS MADERA INTERDENTALES", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CUÑAS DE ROTACION TRANSAPARENTE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CUÑAS DE ROTACION GRIS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CORTADOR DISTAL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CORTADOR DE LIGADURA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CONOS DE GUTAPERCHA WAVE ONE GOLD LARGE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CEMENTO ALL-CEM CORE A2", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CAJA RATONES", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CAJA PORTA ELASTIES X 32", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CAJA PARA RETENEDOR BAJA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CAJA PARA RETENEDOR ALTA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #8", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #7", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #6", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #5", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #4", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #38", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #35", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #32", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #31", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #30", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #29", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #28", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #27", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #26", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #25", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #24", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #23", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #21", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #20", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #2", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #19", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #18", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #17", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #16", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #15", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #14", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #13", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #12", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #11", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE #1", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE # 34", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CADENETA DALTON GRANDE # 33", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "CABEZA PARA CONTRANGULO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS MISO MINI SAPHPHIRE ROTH 0.", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS MISO MINI SAPHPHIRE MBT 0.22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS MINI ROTH 0.22 X PIEZA ROYA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS MBT 0.22 OP", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ESTETICO ROTH 0.22 MASEL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ESTANDAR ECONOMICO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS E-ELEGANT METAL ROTH MINI 0", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS E-ELEGANT MBT MINI 0.22 ", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS DISCOVERY SMART MBT 0.22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS DE MOLAR STANDAR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS CERAMICOS ROTH SLOT 1.22 MORELLI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS AUTOLIGADO ROTH INFINITY I", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS AUTOLIGADO INTERACTIVOS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS AUOTLIGADO SMART CLIP SL3", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ATUA ROTH MIM 0.22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ATUA MBT 0.22 MINI IMD", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ANGLA ROTH MIM 0.22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS ANGLA MBT 0.22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKETS AC + MIM MBT MORELLI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKET ZAFIRO CERAMICO MORELLI", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKET MOLAR CON HOOK X UNIDA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKET MINI ROTH 0.22 PROFESIONAL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKET AUTOLIGADO INTERACTIVOS AC", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BRACKET AUTOLIGADO CERAMICO SLI MORE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BOTONES ORTODONCIA X UNIDAD", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BATAS CREMALLERA COLORES TALLA L", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "BACTIXIDE GLUTARHALDEHIDO X 500 ML", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOATIVADO NITTI 0.18 L", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 19X25 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 19X25 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 17X25 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 17X25 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16X22 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16X22 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16X16 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16X16 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 16 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 14 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 14 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITTI 012 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO TERMOACTIVADO NITI 12 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 19X25 UPPER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 19X25 LOWER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 17X25 UPPER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 17X25 LOWER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 16X22 UPPER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 16X22 LOWER PAQ X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 16X16 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 16X16 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.20 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.20 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.18 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.18 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.16 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.16 LOWER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.14 UPPER", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.14 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.12 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO NITTI 0.12 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 018 SUP", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 018 INF", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 016 SUP", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 016 INF", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 014 SUP", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED NITI 014 INF", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED ACERO 018 SUP", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO CURVA SPEED ACERO 018 INF", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 19X25 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 19X25 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 17X25 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 17X25 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 16X22 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 16X22 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 16X16 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 16X16 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.20 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.20 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.18 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.18 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.16 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.16 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.14 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.14 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.12 UPPER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ARCO ACERO 0.12 LOWER SOBRE X 10", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE TRENZADO SIN CALIBRE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE TRENZADO REDONDO 017", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE REDONDO 0.28", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE REDONDO 0.26", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE REDONDO 0.24", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE RECTANGULAR TMA 17 X 25", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ALAMBRE RECTANGULAR 16X22", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "AGUA DESIONITEX GARRAFA X 20", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ADHESIVO MAQUIRA BOND 2.1 4M", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ADHESIVO AMBAR UNIVERSAL", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ADHESIVO 3M UNIVERSAL SINGLE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ADHESIVO 3M UNIVERSAL SINGLE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ADHESIVO 3M SINGLE BOND 2 3 G", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "ABREBOCAS DENTIST MULTIUSOS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
  ];
    
  // Carrito de compras
  let cart = [];
  
  localStorage.setItem("listProductos", JSON.stringify(products));
  
  // Función para mostrar productos en la página
  function displayProducts() {
    const productContainer = document.querySelector(".product-list");
  
    products.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product", "product-container-2");
      productDiv.setAttribute("id", product.id);
  
      // Muestra la imagen según la propiedad 'image' de cada producto
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Marca: ${product.brand}</p>
        <p>Precio: $${product.price}</p>
        <button class="view-details" data-index="${index}">Ver detalles</button>
      `;
  
      productContainer.appendChild(productDiv);
    });
  }
  
  // Función para actualizar el carrito de compras
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    /*cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));*/
  }
  
  // Manejar clic en "Ver detalles"
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-details")) {
      const index = e.target.getAttribute("data-index");
      showProductDetails(index);
    }
  });
  
  // Función para mostrar detalles de un producto
  function showProductDetails(index) {
    const product = products[index];
  
    // Aquí puedes abrir una nueva página o un modal con los detalles del producto
    // y permitir a los usuarios agregar el producto al carrito desde esa página.
  }
  
  // Manejar comentarios
  
  
  // Función para agregar comentarios
  function addComment(commentText) {
    const commentsList = document.querySelector("#comments ul");
    const newComment = document.createElement("li");
    newComment.innerHTML = `<p>Usuario:</p><p>${commentText}</p>`;
    commentsList.appendChild(newComment);
  }
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", function () {
    // Cargar carrito desde localStorage, si existe
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Mostrar productos en la página
    displayProducts();
  
    // Actualizar el carrito
    updateCart();
  });
  
  // Elementos HTML
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");
  
  
  // Función para realizar la búsqueda
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";
  
    if (searchTerm) {
        const matchingProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm)
        });
  
        if (matchingProducts.length > 0) {
            matchingProducts.forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
        }
    } else {
        searchResults.innerHTML = "<p>Ingrese un término de búsqueda.</p>";
    }
  }
  
  // Manejar clic en el botón de búsqueda
  searchButton.addEventListener("click", performSearch);
  
  // Manejar la tecla Enter en el campo de búsqueda
  searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-container-2").forEach(product=>{
    console.log(product);
    product.addEventListener('click', () => {
      const id = product.getAttribute("id")
      
      const selectedProduct = products.find(x=>x.id==id)
      localStorage.setItem("PRODUCTO_ACTUAL", JSON.stringify(selectedProduct))
      window.location = "./prevencion-diagnostico.html"
    })
  })
  })
  
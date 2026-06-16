import pandas as pd
import os

# Solicitar archivo
archivo = input("Nombre o ruta del archivo CSV: ").strip().strip('"')

# Agregar .csv si no lo tiene
if not archivo.lower().endswith(".csv"):
    archivo += ".csv"

# Verificar existencia
if not os.path.exists(archivo):
    print(f"\nNo se encontró el archivo:\n{archivo}")
    input("\nPresiona ENTER para salir...")
    exit()

try:
    # Leer todo como texto
    df = pd.read_csv(archivo, dtype=str)

    print("\nColumnas encontradas:\n")

    for i, columna in enumerate(df.columns, start=1):
        print(f"{i}. {columna}")

    print("\nEscribe el nombre o número de la columna.")
    print("Escribe 'salir' para terminar.\n")

    while True:

        seleccion = input("Columna: ").strip()

        if seleccion.lower() == "salir":
            break

        # Permitir seleccionar por número
        if seleccion.isdigit():

            indice = int(seleccion) - 1

            if 0 <= indice < len(df.columns):
                columna = df.columns[indice]
            else:
                print("Número de columna inválido.")
                continue

        else:

            coincidencias = [
                c for c in df.columns
                if c.lower() == seleccion.lower()
            ]

            if not coincidencias:
                print("La columna no existe.")
                continue

            columna = coincidencias[0]

        print("\n" + "=" * 60)
        print(f"Contenido de: {columna}")
        print("=" * 60)

        valores = (
            df[columna]
            .fillna("")
            .astype(str)
            .tolist()
        )

        print("\n".join(valores))

        print("\n" + "=" * 60 + "\n")

except Exception as e:
    print(f"\nError al leer el archivo: {e}")

input("\nPresiona ENTER para cerrar...")
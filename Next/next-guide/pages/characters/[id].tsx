import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import imageLoader from "../../imageLoader"
import { Character } from "../../types"
import styles from "../../styles/Character.module.css"

function CharacterPage({ character }: {
    character: Character
}) {
    const router = useRouter()
    console.log(router.query.id)
    return <div className={styles.container}>
        <h1>{character.name}</h1>
        <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width="200"
            height="200"
        />
    </div>
}

CharacterPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const character = await res.json()
    return {
        props: {
            character
        }
    }
}

export default CharacterPage
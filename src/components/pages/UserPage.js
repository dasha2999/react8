import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { User } from "../User/User"
import { withError } from "../../hoc/withError"
import preloader from '../../images/preloader.gif'


const HandleUser = withError(User)

export const UserPage = () => {
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://reqres.in/api/users/${userId}`)
            .then((resp) => {
                if (resp.status >= 400 && resp.status < 600) {
                    throw new Error('Failed fetching data')
                }
                return resp.json()
            })
            .then(({ data }) => setUserData(data))
            .catch(({ message }) => setErrorMessage(message))
            .finally(() => setIsLoading(false))
    }, [])

    // console.log(window.location.pathname)
    // console.log(userData)

    return (
        <>
            {/* {!isLoading ? <User {...userData} /> : <img src={preloader} />} */}
            {!isLoading ? <HandleUser {...userData} errorMsg={errorMessage} /> : <img src={preloader} />}
            <Link to='/'>Go to main page</Link>
        </>
    )
}
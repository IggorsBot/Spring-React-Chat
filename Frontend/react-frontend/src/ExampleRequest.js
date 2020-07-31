import useAxios from 'axios-hooks'

const [{ data, loading, error }, refetch] = useAxios(
    'http://localhost:8080/welcome'
)

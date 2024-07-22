import { base_url } from "./config";

export const postUser = async (user) => await fetch(`${base_url}api/users`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
})

export const getUser = async (id) => await fetch(`${base_url}api/users/${id}`).then(res => res.json())

export const getUsers = async () => await fetch(`${base_url}api/users`).then(res => res.json())

export const updateUser = async (id, user) => await fetch(`${base_url}api/users/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
})

export const deleteUser = async (id) => await fetch(`${base_url}api/users/${id}`,{
    method: 'DELETE'
})
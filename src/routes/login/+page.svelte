<script lang="ts">
	// Script de connexion @ http://localhost:4004/users/login

	import { goto } from '$app/navigation';

	let email: string;
	let password: string;
	let error: string;

	async function login() {
		// to reset previous error
		error = undefined;

		try {
			const response = await fetch('http://localhost:4004/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			});

			if (response.ok) {
				const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
				goto('/account');
			} else {
				error = await response.text();
			}
		} catch (e) {
			error = e.message;
		}
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="w-1/3 bg-white shadow-md rounded-lg p-4 my-4">
		<h2 class="text-xl font-bold">Connexion</h2>
		<form class="flex flex-col" method="POST" on:submit|preventDefault={login}>
			<label for="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				bind:value={email}
				class="border border-gray-300 p-2 rounded my-2"
			/>
			<label for="password">Mot de passe</label>
			<input
				type="password"
				name="password"
				id="password"
				bind:value={password}
				class="border border-gray-300 p-2 rounded my-2"
			/>
			<button type="submit" class="bg-gray-500 text-white p-2 rounded">Se connecter</button>
		</form>
		<p class="text-gray-600">
			Pas encore de compte ? <a href="/register" class="text-gray-400 hover:text-gray-600"
				>Inscrivez-vous</a
			>
		</p>
	</div>
</div>

<style lang="postcss">
</style>

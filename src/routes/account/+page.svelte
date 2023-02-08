<script lang="ts">
	import { goto } from '$app/navigation';
	import type { User } from '$lib/user';

    if(!localStorage.getItem('token')) {
        goto('/login')
    }

	let user: User;

	user = JSON.parse(localStorage.getItem('user'));

	function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
		goto('/login')
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="w-1/3 bg-white shadow-md rounded-lg p-4 my-4">
		<h2 class="text-xl font-bold">Mon compte</h2>
		<p class="text-gray-600">Email: {user.email}</p>
		<p class="text-gray-600">Id: {user._id}</p>
	</div>
</div>

<!-- btn de logout -->
<button
	on:click={() => {
		logout();
	}}
	class="bg-gray-500 text-white p-2 rounded">Se déconnecter</button
>

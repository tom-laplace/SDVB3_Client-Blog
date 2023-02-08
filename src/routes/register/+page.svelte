<!-- formulaire d'inscription -->

<div class="flex flex-col items-center justify-center">
    <div class="w-1/3 bg-white shadow-md rounded-lg p-4 my-4">
        <h2 class="text-xl font-bold">Inscription</h2>
        <form class="flex flex-col" method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="border border-gray-300 p-2 rounded my-2" />
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" class="border border-gray-300 p-2 rounded my-2" />
        <button type="submit" class="bg-gray-500 text-white p-2 rounded">S'inscrire</button>
        </form>
        <p class="text-gray-600">Déjà un compte ? <a href="/login" class="text-gray-400 hover:text-gray-600">Connectez-vous</a></p>
    </div>
</div> 
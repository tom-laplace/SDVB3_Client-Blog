<script>
    import "../app.css";
  </script>

<nav class="h-screen bg-gray-900 flex flex-col w-20 m-0 absolute px-5">
  <div class="h-12 p-4">
    <a href="/">
      <svg class="w-6 h-6 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    </a>
    
    <a href="/login" class="ml-auto">
      <svg class="w-6 h-6 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    </a>
  </div>
</nav>

  
  <slot />
class Github {
  constructor() {
    this.client_id = "e76e15edffa3c4d21d8c";
    this.client_secret = "a0325117046455a08c13144d79aae926e6ecb386";
    this.repo_count = 5;
    this.repo_sort = "created:asc";
  }
  async getUser(user) {
    const profileData = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposData = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileData.json();
    const repos = await reposData.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}

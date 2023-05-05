from django.test import TestCase, Client
from django.urls import reverse


class TestURLs(TestCase):
    def setUp(self):
        self.client = Client()
        self.index_url = reverse("main:index")
        self.game_url = reverse("main:game")
        self.profile_url = reverse("main:profile")
        self.select_url = reverse("main:select")

    def test_index_url(self):
        response = self.client.get(self.index_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, "index.html")

    def test_game_url(self):
        response = self.client.get(self.game_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, "game.html")

    def test_profile_url(self):
        # user = User.objects.create(username="testuser", email="testuser@test.com")
        # self.client.force_login(user)
        response = self.client.get(self.profile_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, "profile.html")

    def test_select_url(self):
        response = self.client.get(self.select_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, "select.html")

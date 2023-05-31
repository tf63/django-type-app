from django.test import TestCase, Client
from django.urls import reverse


class TestURLs(TestCase):
    def setUp(self):
        self.client = Client()
        self.code_url = reverse("api:code")

    def test_index_url(self):
        response = self.client.get(self.code_url)
        self.assertEquals(response.status_code, 200)
        # self.assertTemplateUsed(response, "index.html")
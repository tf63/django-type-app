from django.test import TestCase, Client
from django.urls import reverse


class TestURLs(TestCase):
    def setUp(self):
        self.client = Client()
        self.problem_url = reverse("api:problem")
        self.record_url = reverse("api:record")

    def test_problem_url(self):
        response = self.client.get(self.problem_url)
        self.assertEquals(response.status_code, 200)
        # self.assertTemplateUsed(response, "index.html")

    def test_record_url(self):
        response = self.client.get(self.record_url)
        self.assertEquals(response.status_code, 200)
        # self.assertTemplateUsed(response, "index.html")
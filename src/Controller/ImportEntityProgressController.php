<?php
namespace Drupal\import_entity_progress\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for import entity progress routes.
 */
class ImportEntityProgressController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {
    $configs = [
      '#type' => "html_tag",
      '#tag' => 'section',
      '#value' => 'Gestions des termes',
      '#attributes' => [
        'id' => 'app'
      ]
    ];
    $configs['#attached']['library'][] = 'import_entity_progress/ui_api';
    return $configs;
  }

  public function deleteTerms(Request $Request) {
    $body = JSON::decode($Request->getContent());
    try {
      if (! empty($body['vid']) && ! empty($body['tids'])) {
        $taxonomy_term = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
        $tids = [];
        foreach ($body['tids'] as $tid) {
          $tids[] = \Drupal\taxonomy\Entity\Term::load($tid);
        }
        $taxonomy_term->delete($tids);
      } else {
        throw new \Exception('vid ou tids manquant');
      }
    } catch (\Exception $e) {
      return $this->reponse($e->getTrace(), 403, $e->getMessage());
    }
    return $this->reponse($body, 200, 'Supresion des terms ok');
  }

  /**
   *
   * @param array|string $configs
   * @param number $code
   * @param string $message
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  protected function reponse($configs, $code = null, $message = null) {
    if (! is_string($configs))
      $configs = Json::encode($configs);
    $reponse = new JsonResponse();
    if ($code)
      $reponse->setStatusCode($code, $message);
    $reponse->setContent($configs);
    return $reponse;
  }
}
